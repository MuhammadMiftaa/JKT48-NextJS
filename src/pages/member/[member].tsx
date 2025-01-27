import { useEffect } from "react";
import { useRouter } from "next/router";
import { memberType } from "@/types/memberType";
import useSWR from "swr";
import Loading from "@/components/elements/Loading";
import MemberDetailName from "@/components/fragments/MemberDetailName";
import MemberDetailList from "@/components/fragments/MemberDetailList";
import MemberDetailMedia from "@/components/fragments/MemberDetailMedia";
import BackSide from "@/components/elements/MemberDetailMediaSide/BackSide";

export default function MemberDetailPage() {
  const { query } = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/data-member/${query.member}`,
    fetcher
  );
  let dataMember: memberType = isLoading ? {} : data.data;

  const detailMemberData: {
    category: string;
    label: string[];
    value: any[];
  }[] =
    dataMember === undefined
      ? []
      : [
          {
            category: "Name",
            label: ["Stage Name", "Full Name", "Nick Name"],
            value: [
              dataMember.nama,
              dataMember.nama_lengkap,
              dataMember.nama_panggilan,
            ],
          },
          {
            category: "Personal",
            label: ["Age", "Birthday", "Birthplace", "Home Town"],
            value: [
              dataMember.umur,
              dataMember.tanggal_lahir,
              dataMember.kota_lahir,
              dataMember.asal,
            ],
          },
          {
            category: "About",
            label: ["Generation", "Debut Date", "Fanbase", "Jikoshoukai"],
            value: [
              dataMember.generasi,
              dataMember.tanggal_bergabung,
              dataMember.fanbase,
              dataMember.salam_perkenalan,
            ],
          },
          {
            category: "Education",
            label: ["College", "College Major"],
            value: [dataMember.universitas, dataMember.jurusan],
          },
        ];

  useEffect(() => {
    const subMenus = document.querySelectorAll<HTMLDivElement>(".subMenu");
    const buttons =
      document.querySelectorAll<HTMLButtonElement>(".content button");

    const click = (item: HTMLButtonElement) => {
      subMenus.forEach((menu) => {
        if (menu) menu.style.height = "0px";
      });
      buttons.forEach((button) => button.classList.remove("active"));

      if (!item.nextElementSibling) {
        item.classList.add("active");
        return;
      }

      const subMenu = item.nextElementSibling as HTMLDivElement;
      const ul = subMenu.querySelector("ul");

      if (!subMenu.clientHeight && ul) {
        subMenu.style.height = `${ul.clientHeight}px`;
        item.classList.add("active");
      } else {
        subMenu.style.height = "0px";
        item.classList.remove("active");
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", (event) =>
        click(event.currentTarget as HTMLButtonElement)
      );
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", (event) =>
          click(event.currentTarget as HTMLButtonElement)
        );
      });
    };
  });

  function nameSpliter(sentence: string) {
    sentence = sentence.trim();
    let words = sentence.split(" ");
    let firstWord = words[0];
    words.shift();
    let woFirstWord = words.join(" ");
    return { firstWord, woFirstWord };
  }

  return (
    <>
      {!isLoading && dataMember !== undefined ? (
        <>
          <div className="flex flex-col md:flex-row relative member-container">
            <div className="content w-full py-8 px-4 md:px-16 md:basis-3/5">
              <MemberDetailName
                name={dataMember.nama}
                isMemberRegular={dataMember.member_regular}
                nameSpliter={nameSpliter}
              ></MemberDetailName>

              <div className="flex flex-col gap-5 md:gap-7 overflow-hidden">
                {detailMemberData.map((data, i) => (
                  <MemberDetailList
                    index={i}
                    key={i}
                    category={data.category}
                    dataMember={{
                      label: data.label,
                      value: data.value,
                    }}
                  ></MemberDetailList>
                ))}
              </div>
            </div>
            <label className="md:basis-2/5 overflow-hidden hidden md:block">
              <input type="checkbox" className="absolute scale-0" />
              <MemberDetailMedia
                nama={dataMember.nama}
                username_ig={dataMember.username_ig}
                username_sr={dataMember.username_sr}
                username_tiktok={dataMember.username_tiktok}
                username_idn={dataMember.username_idn}
                username_x={dataMember.username_x}
              />
            </label>
            <div className="flex flex-col md:hidden items-center my-10">
              <h1 className="title-gradient-bold w-fit font-poppins">
                Media Social
              </h1>
              <BackSide
                username_ig={dataMember.username_ig}
                username_sr={dataMember.username_sr}
                username_tiktok={dataMember.username_tiktok}
                username_idn={dataMember.username_idn}
                username_x={dataMember.username_x}
              />
            </div>
          </div>
        </>
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ height: "70vh" }}
        >
          <Loading />
        </div>
      )}
    </>
  );
}
