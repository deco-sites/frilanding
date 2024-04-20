export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
}

export default function SingleContent() {
  return <div class="container max-w-4xl">{description}</div>
}