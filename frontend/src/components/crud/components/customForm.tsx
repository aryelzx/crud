/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from 'react-hook-form';
import { Button } from '../../../shared/@components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../shared/@components/ui/form';
import { Input } from '../../../shared/@components/ui/input';

interface Props {
  label: string;
  onsubmit: () => void;
  inputs: {
    label: string;
    type: string;
    name: string;
  }[];
  form: UseFormReturn<any>;
  icon: React.ReactNode
}

function CustomForm({ label, onsubmit, inputs, form, icon }: Props) {
  return (
    <>
      <Form {...form}>
        <div className="flex justify-center w-fit items-center text-emerald-600 gap-2 p-1">
          <i className="text-xl font-semibold">{label}</i>
          {icon}
        </div>
        <form className="w-3/6 flex flex-col gap-2" onSubmit={onsubmit}>
          {inputs?.map((input) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={input.type}
                      value={field.value}
                      onChange={(e) => { return field.onChange(e.target.value) }}
                      className="h-11 rounded-lg w-full border-[.8px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            className="w-full bg-green-400 hover:bg-green-500 delay-75"
            type="submit"
          >
            Send
          </Button>
        </form>
      </Form >
    </>
  )
}

export { CustomForm };

