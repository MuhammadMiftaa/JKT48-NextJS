import Button from "@/components/elements/Button";
import MainCard from "@/components/fragments/MemberCard/MainCard";
import SmallCard from "@/components/fragments/MemberCard/SmallCard";
import PageSeparator from "@/components/fragments/PageSeparator/PageSeparator2";
import { memberType } from "@/components/types/memberType";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Member() {
  const { push } = useRouter();
  const handlerSeeAll = () => {
    push("/member");
  };

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/data-member/member", fetcher);
  const dataMember: memberType[] = isLoading ? [] : data.data;
  const memberRegular = dataMember.filter((member) => member.member_regular);
  const memberTrainee = dataMember.filter((member) => !member.member_regular);

  return (
    <>
      <h1 className="title-gradient-light text-4xl mt-24 mb-4 mr-4 text-right font-urbanist from-80%">
        JKT48 Newera —
      </h1>
      <div className="flex gap-24 pb-32 pl-32 relative font-poppins">
        <MainCard />
        <div className="flex flex-col gap-6 basis-2/3 overflow-x-scroll relative scrollbar-none">
          <div className="flex gap-6">
            {memberRegular.map((member, i) => {
              if (member.id == "Shania-Gracia") return;
              return <SmallCard member={member} key={i} index={i}></SmallCard>;
            })}
          </div>
        </div>
        <div className="flex justify-center absolute bottom-64 right-1/4">
          <Button onClick={handlerSeeAll}>View All Member</Button>
        </div>
      </div>
      <PageSeparator />
    </>
  );
}
