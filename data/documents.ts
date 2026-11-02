export interface DocumentEntry {
  id: "cv" | "transcript";
  label: string;
  fileName: string;
  href: string;
}

export const documents: DocumentEntry[] = [
  {
    id: "cv",
    label: "CV",
    fileName: "AryanIsaacBhobe.pdf",
    href: "/documents/AryanIsaacBhobe.pdf",
  },
  {
    id: "transcript",
    label: "Transcript",
    fileName: "AryanBhobe_Transcript.pdf",
    href: "/documents/AryanBhobe_Transcript.pdf",
  },
];
