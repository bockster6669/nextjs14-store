'use client';
import {
  createTodoForm,
  createTodoFormSchema,
} from '@/lib/utils/addNewTodo.schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '../ui/form';
import { Input } from '../ui/input';
import { useAppDispatch } from '@/hooks/redux-store';
import { addNewPost, Post } from '@/store/posts/posts.slice';

const CreatePostForm = () => {
  const dispatch = useAppDispatch();
  const form = useForm<createTodoForm>({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: zodResolver(createTodoFormSchema),
    mode: 'onTouched',
  });

  const onSubmit = (formData: createTodoForm) => {
    console.log(formData);
    const { title, description } = formData;

    dispatch(addNewPost(title, description));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[400px] bg-slate-200 shadow-lg p-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreatePostForm;
