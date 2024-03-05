import type { PostProcessorModule } from "i18next";
import { ReactNode, useRef } from "react";
import { useMouse } from "react-use";

const indexByTextkey = new Map<string, number>();
const NUMBER_OF_BITS = 9; //2^9 => Max. 512 used keys per page
const INVISIBLE_CHARACTERS = ["\u200C", "\u200D"];
const INVISIBLE_REGEX = RegExp(
  `([${INVISIBLE_CHARACTERS.join("")}]{${NUMBER_OF_BITS}})+`,
  "gu",
);
const MAX_KEY_INDEX = Math.pow(2, NUMBER_OF_BITS);

//i18next plugin
export default {
  type: "postProcessor",
  name: "KeyRetraction",
  process: function (value: string, key) {
    const keyHash = JSON.stringify(key);
    /* return manipulated value */
    if (indexByTextkey.get(keyHash) === undefined) {
      indexByTextkey.set(keyHash, indexByTextkey.size + 1);
    }
    const keyIndex = indexByTextkey.get(keyHash);
    const invisibleKeyChars =
      keyIndex === undefined ? "" : encodeNumber(keyIndex);
    return invisibleKeyChars + value;
  },
} as PostProcessorModule;

function encodeNumber(n: number) {
  if (n < 0 || n > MAX_KEY_INDEX) {
    throw new TypeError("number out of range");
  }
  const nineBits = (n >>> 0).toString(2).padStart(NUMBER_OF_BITS, "0");
  const stringOfInvisibleChars = Array.from(nineBits)
    .map((b) => INVISIBLE_CHARACTERS[Number(b)])
    .join("");
  return stringOfInvisibleChars;
}

function decodeNumber(encodedNumber: string) {
  const bits = Array.from(encodedNumber)
    .map((character) => {
      return INVISIBLE_CHARACTERS.indexOf(character);
    })
    .map(String)
    .join("");
  return parseInt(bits, 2);
}
export const decodeFromText = (text: string) => {
  const encodedTextKeys = Array.from(
    new Set(
      text.match(INVISIBLE_REGEX)?.filter((m) => m.length >= NUMBER_OF_BITS),
    ),
  );
  return encodedTextKeys?.map(decodeNumber) || [];
};

export function I18nextKeyRetraction({
  children,
  disabled = false,
}: {
  children: ReactNode;
  disabled?: boolean;
}) {
  if (disabled) {
    return <>{children}</>;
  } else {
    return <KeyInjection>{children}</KeyInjection>;
  }
}

//track mouse and extract text-keys used in page "under" the pointer
function KeyInjection({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);
  const textkeyByIndex = Array.from(indexByTextkey).reduce(
    (acc, [key, index]) => acc.set(index, JSON.parse(key)),
    new Map<number, string>(),
  );
  console.debug(
    decodeFromText(
      document.elementFromPoint(docX, docY)?.textContent ?? "",
    ).flatMap((i) => {
      return textkeyByIndex.get(i);
    }),
  );
  return <div {...{ ref }}>{children}</div>;
}
