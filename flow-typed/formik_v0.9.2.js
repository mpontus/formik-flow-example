declare module "formik" {
  declare type UnaryFn<A, R> = (a: A) => R;
  declare type Component<A> = React$ComponentType<A>;

  declare export type FormikHOC<Base, Enhanced> = UnaryFn<
    Component<Base>,
    Component<Enhanced>
  >;

  declare export function withFormik<Enhanced, Values>(
    // Formik configuration options
    options: {
      displayName?: string,
      mapPropsToValues?: (props: Enhanced) => Values,
      handleSubmit?: (
        values: Values,
        formikBag: {
          props: Enhanced,
          setValues: (values: Values) => void,
          setFieldValue: <K: $Keys<Values>>(field: K, value: any) => void,
          setErrors: (errors: { [key: $Keys<Values>]: string }) => void,
          setFieldError: <K: $Keys<Values>>(field: K, message: string) => void,
          setTouched: (touched: { [key: $Keys<Values>]: boolean }) => void,
          setFieldTouched: <K: $Keys<Values>>(
            field: K,
            isTouched?: boolean
          ) => void,
          setSubmitting: (isSubmitting: boolean) => void,
          setStatus: (status: any) => void,
          resetForm: (nextProps?: Enhanced) => void,
          submitForm: () => void
        }
      ) => void,
      validate?: (
        values: Values,
        props: Enhanced
      ) =>
        | void
        | $ObjMap<Values, <K>(k: K) => string>
        | Promise<void | $ObjMap<Values, <K>(k: K) => string>>,
      validationSchema?: ((props: Enhanced) => any) | any,
      validateOnChange?: boolean,
      validateOnBlur?: boolean,
      isInitialValid?: boolean | ((props: Enhanced) => boolean | void)
    }
  ): FormikHOC<
    {
      ...$Exact<Enhanced>,

      // FormikComputedProps
      dirty: boolean,
      isValid: boolean,
      // Formik state and state helpers
      values: Values,
      setValues: (values: Values) => void,
      setFieldValue: <K: $Keys<Values>>(field: K, value: any) => void,

      errors: $ObjMap<Values, <K>(k: K) => ?string>,
      setErrors: (errors: { [key: $Keys<Values>]: string }) => void,
      setFieldError: <K: $Keys<Values>>(field: K, message: string) => void,

      touched: $ObjMap<Values, <K>(k: K) => boolean | void>,
      setTouched: (touched: { [key: $Keys<Values>]: boolean }) => void,
      setFieldTouched: <K: $Keys<Values>>(
        field: K,
        isTouched?: boolean
      ) => void,

      isSubmitting: boolean,
      setSubmitting: (isSubmitting: boolean) => void,

      status?: any,
      setStatus: (status: any) => void,

      resetForm: (nextProps?: Enhanced) => void,
      submitForm: () => void,

      // FormikHandlers

      handleSubmit: (e: SyntheticEvent<EventTarget>) => void,
      handleChange: (e: SyntheticEvent<EventTarget>) => void,
      handleChangeValue: (name: string, value: any) => void,
      handleBlur: (e: SyntheticEvent<EventTarget>) => void,
      handleReset: () => void
    },
    Enhanced
  >;
}
