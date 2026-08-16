import { documents } from "@/data/documents";
import { Button } from "@/components/ui/Button";
import { DocumentIcon, DownloadIcon } from "@/components/ui/icons";

export function DocumentActions() {
  return (
    <div className="w-full flex flex-col gap-3">
      {documents.map((doc) => (
        <div key={doc.id} className="w-full">
          <div className="font-mono text-[11px] font-medium text-muted uppercase tracking-wide mb-1.5">
            {doc.label}
          </div>
          <div className="flex gap-2">
            <Button
              variant="primary"
              href={doc.href}
              target="_blank"
              rel="noopener"
              className="flex-1"
            >
              <DocumentIcon />
              View
            </Button>
            <Button
              variant="secondary"
              href={doc.href}
              download={doc.fileName}
              className="flex-1"
            >
              <DownloadIcon />
              Download
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
