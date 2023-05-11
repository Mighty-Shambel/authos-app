<template>
  <div>
    <label>{{ label }}</label>
    <Field
      :name="name"
      :placeholder="placeholder"
      :type="inputType"
      v-model="modelValue"
      :rules="validationRules"
      :class="{ 'border-red-500': hasError }"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <ErrorMessage :name="name" class="text-red-500 mt-2" v-if="hasError">
      Field is required
    </ErrorMessage>
  </div>
</template>

<script>
import { useField } from 'vee-validate';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    validationRules: {
      type: String,
      default: 'required',
    },
  },
  setup(props) {
    const { value: modelValue, errorMessage, errors } = useField(props.name);
    const hasError = errors && errors[props.name] && errors[props.name].length > 0;

    return {
      modelValue,
      hasError,
    };
  },
};
</script>
