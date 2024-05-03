'use client';

import { Button, Label, Modal, Select, Spinner, TextInput, Textarea } from 'flowbite-react';
import { i18n } from '@/i18n';
import { IExperience } from '@/components/Interfaces';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';

export default function ExperienceInfoModal(props) {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<IExperience>({});
  const { onClose, profileId, recId, handleRefresh } = props;
  const sinceYearInputRef = useRef<HTMLInputElement>(null);
  const [sinceMonth, setSinceMonth] = useState<number>(0);
  const sinceMonthSelectRef = useRef<HTMLSelectElement>(null);
  const untilYearInputRef = useRef<HTMLInputElement>(null);
  const [untilMonth, setUntilMonth] = useState<number>(0);
  const untilMonthSelectRef = useRef<HTMLSelectElement>(null);
  const positionInputRef = useRef<HTMLInputElement>(null);
  const companyInputRef = useRef<HTMLInputElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);
  const linkedinInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const explanationInputRef = useRef<HTMLTextAreaElement>(null);

  const onSave = () => {
    setSaving(true);

    fetch(`/api/experience/${recId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profile: profileId,
        since: `${sinceYearInputRef.current?.value}-${sinceMonthSelectRef.current?.value}`,
        until: `${untilYearInputRef.current?.value}-${untilMonthSelectRef.current?.value}`,
        position: positionInputRef.current?.value,
        company: companyInputRef.current?.value,
        link: linkInputRef.current?.value,
        linkedin: linkedinInputRef.current?.value,
        description: descriptionInputRef.current?.value,
        explanation: explanationInputRef.current?.value,
      }),
    })
      .then(async (response) => {
        setSaving(false);
        onClose();
        handleRefresh && handleRefresh.call(null);
      })
      .catch((e) => {
        setSaving(false);
        console.error(e);
      });
  };

  useEffect(() => {
    if (recId <= 0) {
      setData({});
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);

    fetch(`/api/experience/${recId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        setLoading(false);
        const resp = await response.json();
        setData(resp);
        resp.since && setSinceMonth(moment(resp.since).month() + 1);
        resp.until && setUntilMonth(moment(resp.until).month() + 1);
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  }, [recId]);

  return (
    <Modal show={Boolean(recId)} size="2xl" popup onClose={() => !saving && onClose()} initialFocus={sinceYearInputRef}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        {loading ? (
          <div className="flex flex-row justify-center">
            <Spinner size="xl" />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-row gap-6">
              <div className="basis-0 flex-grow">
                <div className="mb-2 block">
                  <Label htmlFor="since-year" value={i18n('entities.experience.fields.since')} />
                </div>
                <div className="flex flex-row gap-2">
                  <TextInput
                    id="since-year"
                    className="basis-0 flex-grow"
                    ref={sinceYearInputRef}
                    placeholder={i18n('entities.experience.fields.year')}
                    defaultValue={(data.since && moment(data.since).year()) || ''}
                    disabled={saving}
                    required
                  />
                  <Select
                    id="since-month"
                    className="basis-0 flex-grow"
                    ref={sinceMonthSelectRef}
                    value={sinceMonth}
                    onChange={(evt) => {
                      evt.stopPropagation();
                      evt.preventDefault();
                      setSinceMonth(parseInt(sinceMonthSelectRef.current?.value || '0'));
                    }}
                    required
                  >
                    <option></option>
                    {moment.months().map((monthName, index) => (
                      <option key={`since-month-${index}`} value={index + 1}>
                        {monthName}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="basis-0 flex-grow">
                <div className="mb-2 block">
                  <Label htmlFor="until-year" value={i18n('entities.experience.fields.until')} />
                </div>
                <div className="flex flex-row gap-2">
                  <TextInput
                    id="until-year"
                    className="basis-0 flex-grow"
                    ref={untilYearInputRef}
                    placeholder={i18n('entities.experience.fields.year')}
                    defaultValue={(data.until && moment(data.until).year()) || ''}
                    disabled={saving}
                    required
                  />
                  <Select
                    id="until-month"
                    className="basis-0 flex-grow"
                    ref={untilMonthSelectRef}
                    value={untilMonth}
                    onChange={(evt) => {
                      evt.stopPropagation();
                      evt.preventDefault();
                      setUntilMonth(parseInt(untilMonthSelectRef.current?.value || '0'));
                    }}
                    required
                  >
                    <option></option>
                    {moment.months().map((monthName, index) => (
                      <option key={`until-month-${index}`} value={index + 1}>
                        {monthName}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="position" value={i18n('entities.experience.fields.position')} />
              </div>
              <TextInput
                id="position"
                ref={positionInputRef}
                placeholder={i18n('entities.experience.fields.position')}
                defaultValue={data.position || ''}
                disabled={saving}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="company" value={i18n('entities.experience.fields.company')} />
              </div>
              <TextInput
                id="company"
                ref={companyInputRef}
                placeholder={i18n('entities.experience.fields.company')}
                defaultValue={data.company || ''}
                disabled={saving}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="link" value={i18n('entities.experience.fields.link')} />
              </div>
              <TextInput
                id="link"
                ref={linkInputRef}
                placeholder={i18n('entities.experience.fields.link')}
                defaultValue={data.link || ''}
                disabled={saving}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="linkedin" value={i18n('entities.experience.fields.linkedin')} />
              </div>
              <TextInput
                id="linkedin"
                ref={linkedinInputRef}
                placeholder={i18n('entities.experience.fields.linkedin')}
                defaultValue={data.linkedin || ''}
                disabled={saving}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value={i18n('entities.experience.fields.description')} />
              </div>
              <Textarea
                id="description"
                ref={descriptionInputRef}
                placeholder={i18n('entities.experience.fields.description')}
                defaultValue={data.description || ''}
                disabled={saving}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="explanation" value={i18n('entities.experience.fields.explanation')} />
              </div>
              <Textarea
                id="explanation"
                ref={explanationInputRef}
                placeholder={i18n('entities.experience.fields.explanation')}
                defaultValue={data.explanation || ''}
                disabled={saving}
              />
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button onClick={() => onSave()} isProcessing={saving}>
          {i18n('common.save')}
        </Button>
        <Button color="gray" onClick={() => onClose()} disabled={saving}>
          {i18n('common.cancel')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
