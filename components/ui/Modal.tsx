import { useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
};

const dialogStyles = {
  "sidebar-right": "animate-slide-left",
  "sidebar-left": "animate-slide-right",
  center: "animate-fade-in",
};

const sectionStyles = {
  "sidebar-right": "justify-end",
  "sidebar-left": "justify-start",
  center: "justify-center items-center",
};

const containerStyles = {
  "sidebar-right": "h-full sm:w-[383px] w-[85vw]",
  "sidebar-left": "h-full sm:w-[383px] w-[95vw]",
  center: "w-full",
};

const Modal = ({
  open,
  title,
  mode = "sidebar-right",
  onClose,
  children,
  loading,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open === false) {
      document.getElementsByTagName("body").item(0)?.classList.remove(
        "no-scroll",
      );
      ref.current?.open === true && ref.current.close();
    } else if (open === true) {
      document.getElementsByTagName("body").item(0)?.classList.add(
        "no-scroll",
      );
      ref.current?.open === false && ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full w-full max-h-full h-full backdrop:bg-opacity-50 backdrop:bg-black  ${
        dialogStyles[mode]
      } ${props.class ?? ""}`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "SECTION" && onClose?.()}
      // @ts-expect-error - This is a bug in types.
      onClose={onClose}
    >
      <section
        class={`h-full flex bg-transparent ${sectionStyles[mode]}`}
      >
        <div
          class={`bg-base-100 flex flex-col max-h-full h-full ${
            containerStyles[mode]
          }`}
        >
          <div class="overflow-y-auto flex-grow flex flex-col">
            {loading === "lazy" ? lazy.value && children : children}
          </div>
        </div>
      </section>
    </dialog>
  );
};

export default Modal;
