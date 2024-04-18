import { PEOPLE_URL } from "@/Constants";
import Image from "next/image";

interface campProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: campProps) => {
  return (
    <div
      className={`w-full h-full min-w-[900px] ${backgroundImage} bg-cover bg-no-repeat md:rounded-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 md:px-20 md:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full p-4 bg-green-50">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden rounded-full">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="md:max-container padding-container relative flex flex-col py-10 md:mob-10 md:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto md:h-[400px] lg:h-[500px] ">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Baltit Fort Hunza"
          subtitle="Gilgit Baltistan"
          peopleJoined="50+ joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Katpana Desert"
          subtitle="Gilgit Baltistan"
          peopleJoined="100+ joined "
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 md:mr-6">
        <div className="bg-green-50 p-8 md:max-w-[500px] lg:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl ">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white drop-shadow-sm">
            <strong>Feeling Lost </strong> And Not Knowing The Way?
          </h2>

          <p className="regular-14 md:regular-16 mt-5 text-white drop-shadow-sm">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
