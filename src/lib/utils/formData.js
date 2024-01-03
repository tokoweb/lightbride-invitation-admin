class FormDataBuilder {
  constructor() {
    this.formData = new FormData();
  }

  append(key, value) {
    if (value instanceof File) {
      this.formData.append(key, value, value.name);
    } else if (value instanceof Object) {
      this.buildFormDataForNestedObject(value, key);
    } else {
      this.formData.append(key, value);
    }
    return this;
  }

  buildFormDataForNestedObject(obj, parentKey) {
    Object.keys(obj).forEach((key) => {
      const nestedKey = parentKey ? `${parentKey}[${key}]` : key;
      this.append(nestedKey, obj[key]);
    });
  }

  build() {
    return this.formData;
  }
}

export const buildFormData = (data) => {
  const formData = new FormDataBuilder();

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      formData.append(key, data[key]);
    }
  }

  return formData.build();
};
