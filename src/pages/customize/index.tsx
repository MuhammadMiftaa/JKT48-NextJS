import { FocusCards } from "@/components/ui/focus-cards";

export default function CustomizePage() {
  const cards = [
    {
      title: "Add New Member",
      src: "/customize/Add New Member.jpg",
      link: "/customize/member"
    },
    {
      title: "Edit Existing Member",
      src: "/customize/Edit Existing Member.jpg",
      link: "/customize/edit"
    },
    {
      title: "Delete Member",
      src: "/customize/Delete Member.jpg",
      link: "/customize/delete"
    },
  ];
  return (
    <div className="h-screen w-screen pt-16 font-urbanist flex items-center justify-center">
      <FocusCards cards={cards} />
    </div>
  );
}
