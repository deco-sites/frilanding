export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
}

export default function SingleContent({
  description = "Description",
}: Props) {
  return (
    <div
      class="container max-w-4xl single-content"
      dangerouslySetInnerHTML={{
        __html: description,
      }}>
    </div>
  )
}