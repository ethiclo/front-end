export default function ErrorMessage({
  message = "An unexpected error has occured. Please try again.",
  ...props
}) {
  return <div {...props}>{message}</div>;
}
