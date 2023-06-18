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
}
export const MultipleForm: React.FC<MultipleFormProps> = ({ id, formList }) => {
  return (
    <form id={id}>
      {(formList &&
        formList.map((form) => (
          <div key={form.name} className="py-2">
            <SingleForm
              type={form.type}
              placeholder={form.placeholder}
              name={form.name}
              error={false}
            />
          </div>
        ))) || (
        <SingleForm
          type="text"
          placeholder="Placeholder"
          name="filter"
          error={false}
        />
      )}
    </form>
  );
};
