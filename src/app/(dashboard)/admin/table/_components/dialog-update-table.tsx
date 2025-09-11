import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition, useActionState, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormTable from './form-table';
import { Dialog } from '@radix-ui/react-dialog';

import {
  Table,
  TableForm,
  tableFormSchema,
} from '@/validations/table-validation';
import { INITIAL_STATE_TABLE } from '@/constants/table-constant';
import { updateTable } from '../actions';

export default function DialogUpdateTable({
  refetch,
  currentData,
  open,
  handleChangeAction,
}: {
  refetch: () => void;
  currentData?: Table;
  open?: boolean;
  handleChangeAction?: (open: boolean) => void;
}) {
  const form = useForm<TableForm>({
    resolver: zodResolver(tableFormSchema),
  });

  const [updateTableState, updateTableAction, isPendingUpdateTable] =
    useActionState(updateTable, INITIAL_STATE_TABLE);

  const onSubmit = form.handleSubmit(data => {
    const formData = new FormData();
    Object.entries(data).forEach(([Key, value]) => {
      formData.append(Key, value);
    });
    formData.append('id', currentData?.id ?? '');

    startTransition(() => {
      updateTableAction(formData);
    });
  });

  useEffect(() => {
    if (updateTableState?.status === 'error') {
      toast.error('Update Table Failed', {
        description: updateTableState.errors?._form?.[0],
      });
    }

    if (updateTableState?.status === 'success') {
      toast.success('Update Table Success');
      form.reset();
      handleChangeAction?.(false);
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTableState]);

  useEffect(() => {
    if (currentData) {
      form.setValue('name', currentData.name);
      form.setValue('description', currentData.description);
      form.setValue('capacity', currentData.capacity.toString());
      form.setValue('status', currentData.status);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentData]);

  return (
    <Dialog open={open} onOpenChange={handleChangeAction}>
      <FormTable
        form={form}
        onSubmit={onSubmit}
        isLoading={isPendingUpdateTable}
        type="Update"
      />
    </Dialog>
  );
}
