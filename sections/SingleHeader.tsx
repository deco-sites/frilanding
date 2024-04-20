import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  image?: ImageWidget;
}

export default function SingleHeader({
  title = "title",
  description = "description",
}: Props) {
  return (
    <div class="flex flex-col items-center gap-8 lg:container lg:mx-auto mx-4 mb-14">
      <div class="flex w-full xl:container xl:mx-auto mx-5 md:mx-10 py-6 z-10 flex-col items-center justify-center text-center">
        <div class="mx-6 lg:mx-auto lg:w-full space-y-4 flex flex-col items-center justify-center lg:max-w-6xl">
          <div class="inline-block lg:text-5xl text-4xl leading-none font-medium">
            <p>{title}</p>
          </div>
          <div
            class="text-base md:text-md leading-[150%]"
            dangerouslySetInnerHTML={{
              __html: description,
            }}>
          </div>
          {/* <div class="flex items-center gap-3"></div> */}
        </div>
      </div>
    </div>
  );
}
