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
      <div className="flex gap-24 pb-32 px-32 relative overflow-x-hidden font-poppins">
        <MainCard />
        <div className="flex flex-col gap-6 basis-2/3 relative">
          <div className="flex gap-6">
            {memberRegular.slice(0, 4).map((member, i) => {
              return <SmallCard member={member} key={i} index={i}></SmallCard>;
            })}
          </div>
          <div className="flex justify-center">
            <Button handlerSeeAll={handlerSeeAll} />
          </div>
        </div>
      </div>
      <PageSeparator />
    </>
  );
}
