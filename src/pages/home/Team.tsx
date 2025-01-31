import SectionHeading from "../../components/SectionHeading";
import TextToIcon from "../../components/TextToIcon";
import ScrollAnimation from "react-animate-on-scroll";
import { team } from "../../data/data";

function Team() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <SectionHeading title="فريق العمل" />
        </ScrollAnimation>

        <div className="flex flex-wrap gap-6 justify-center">
          {team.map((member, i) => (
            <ScrollAnimation animateIn="backInUp" animateOnce key={i}>
              <div className="rounded-xl bg-purple-500 min-w-52 p-5 flex flex-col items-center gap-4 text-white">
                <div className="rounded-full overflow-hidden w-36 h-36 mx-auto bg-blue-gray-300">
                  <img src={member.img} alt="" />
                </div>
                <h4 className="text-xl text-nowrap mt-6">{member.name}</h4>
                <h5 className="text-sm text-nowrap">{member.title}</h5>
                <ul className="flex m-auto ">
                  {member.social.map((e, i) => (
                    <li key={i}>
                      <a
                        href={e.link}
                        className="p-2 block transition-all rounded-sm hover:bg-main"
                      >
                        <TextToIcon text={e.type} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
