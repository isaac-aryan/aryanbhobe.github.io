import Image from "next/image";
import { profile } from "@/data/profile";
import { ContactList } from "@/components/layout/ContactList";
import { DocumentActions } from "@/components/documents/DocumentActions";

export function Sidebar() {
  return (
    <aside className="bg-surface border-r border-rule px-7 py-12 flex flex-col items-center sidebar:sticky sidebar:top-0 sidebar:h-screen sidebar:overflow-y-auto sidebar:w-auto max-sidebar:w-full max-sidebar:flex-row max-sidebar:flex-wrap max-sidebar:justify-center max-sidebar:gap-4 max-sidebar:border-r-0 max-sidebar:border-b max-sidebar:px-5 max-sidebar:py-8">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={108}
        height={108}
        priority
        className="rounded-full object-cover border border-rule mb-4.5 shrink-0"
      />

      <div className="font-serif text-lg font-semibold text-strong text-center mb-1">
        {profile.name}
      </div>
      <div className="text-xs text-muted text-center leading-relaxed mb-7">
        {profile.roleLine}
        <br />
        {profile.roleSubline}
      </div>

      <ContactList />

      <div className="w-full h-px bg-rule mb-5 max-sidebar:hidden" />

      <div className="w-full max-sidebar:max-w-xs">
        <DocumentActions />
      </div>

      <div className="mt-auto pt-6 text-[11px] text-muted text-center leading-loose max-sidebar:hidden whitespace-pre-line">
        {profile.footer}
      </div>
    </aside>
  );
}
