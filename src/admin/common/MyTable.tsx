'use client';

import { classNames } from '@/components/Commons';
import { i18n } from '@/i18n';
import { Checkbox, Table } from 'flowbite-react';
import moment from 'moment';

interface IHeader {
  key: string;
  label: string;
  onClick?: Function;
  order?: 'asc' | 'desc' | 'none';
  width?: number;
  classes?: string[];
  format?: {
    moment?: string;
  };
  render?: Function;
}

interface ICell {
  value: string;
  onClick?: Function;
  render?: Function;
}

interface IRow {
  [key: string]: ICell | number | string;
}

interface ITables {
  hasCheckBox?: boolean;
  headers: Array<IHeader>;
  hoverable?: boolean;
  rows: Array<IRow>;
}

export default function MyTable(props: ITables) {
  const { hoverable, headers, hasCheckBox, rows } = props;

  const headerKeys = (headers || []).map((header: IHeader) => header.key);

  const RenderCell = ({ props, header }: { props: ICell | number | string; header: IHeader }) => {
    const { value, onClick, render } =
      typeof props === 'object' ? props : { value: props, onClick: header.onClick, render: header.render };
    let content = (render && render.call(null, value)) || value;
    if (header.format?.moment) {
      content = moment(content).format(header.format.moment);
    }
    return (
      <span
        onClick={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
          onClick && onClick.call(null);
        }}
      >
        {content}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto mb-5">
      <Table className="text-md font-medium" hoverable={hoverable}>
        <Table.Head>
          {hasCheckBox && (
            <Table.HeadCell className="p-4" style={{ width: 0 }}>
              <Checkbox />
            </Table.HeadCell>
          )}
          {(headers || []).map(({ key, label, onClick, order, width, classes }: IHeader) => (
            <Table.HeadCell
              key={`table-header-${key}`}
              className={classNames('whitespace-nowrap', ...(classes || []))}
              onClick={(evt) => {
                evt.stopPropagation();
                evt.preventDefault();
                onClick && onClick.call(null, key, order);
              }}
              style={{ width }}
            >
              {i18n(label)}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {(!rows || rows.length === 0) && (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell colSpan={headerKeys.length + 1} className="text-center">
                {i18n('table.noRecords')}
              </Table.Cell>
            </Table.Row>
          )}
          {(rows || []).map((row: IRow, i) => (
            <Table.Row key={`table-row-${i}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              {hasCheckBox && (
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
              )}
              {headerKeys.map((key, index) => (
                <Table.Cell key={`table-row-${i}-${key}`} className={classNames(...(headers[index].classes || []))}>
                  <RenderCell props={row[key]} header={headers[index]} />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
