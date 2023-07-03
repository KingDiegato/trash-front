import { SingleForm } from './pure/form';

interface MultipleFormProps {
  id?: string;
  formList: ListOfForms[];
}

interface ListOfForms {
  name: string;
  type: string;
  placeholder: string;
  error: boolean;
  label: string;
}
export const MultipleForm: React.FC<MultipleFormProps> = ({ formList }) => {
  return (
    <>
      {(formList &&
        formList.map((form) => (
          <div key={form.name} className="py-2">
            <SingleForm
              label={form.label}
              type={form.type}
              placeholder={form.placeholder}
              name={form.name}
              error={false}
            />
          </div>
        ))) || (
        <SingleForm
          label="Empty"
          type="text"
          placeholder="Placeholder"
          name="filter"
          error={false}
        />
      )}
    </>
  );
};
