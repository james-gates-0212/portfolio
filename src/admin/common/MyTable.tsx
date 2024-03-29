'use client';

import { i18n } from '@/i18n';
import { Checkbox, Table } from 'flowbite-react';

interface IHeader {
  key: string;
  label: string;
  onClick?: Function;
  order?: 'asc' | 'desc' | 'none';
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

  const RenderCell = ({ props }: { props: ICell | number | string }) => {
    const { value, onClick, render } =
      typeof props === 'object' ? props : { value: props, onClick: undefined, render: undefined };
    const content = (render && render.call(null, value)) || value;
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
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
          )}
          {(headers || []).map(({ key, label, onClick, order }: IHeader) => (
            <Table.HeadCell
              key={`table-header-${key}`}
              onClick={(evt) => {
                evt.stopPropagation();
                evt.preventDefault();
                onClick && onClick.call(null, key, order);
              }}
            >
              {i18n(label)}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {(rows || []).map((row: IRow, i) => (
            <Table.Row key={`table-row-${i}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              {hasCheckBox && (
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
              )}
              {headerKeys.map((key) => (
                <Table.Cell key={`table-row-${i}-${key}`}>
                  <RenderCell props={row[key]} />
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
