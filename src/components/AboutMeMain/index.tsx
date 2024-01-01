import { StyledDiv, StyledSection } from "./style";

export const AboutMeMain = ({$language}:{$language?: string}) => {
    return (
        <StyledSection>
            <StyledDiv>
                <h1>
                    {$language === "EN" ? 
                    "ABOUT ME":
                    "SOBRE MIM"}
                </h1>
                <p>
                    {$language === "EN" ? 
                    "My journey into the world of technology began in my childhood through my fascination with video games, which not only introduced me to English but also ignited my curiosity about programming. I am proud to say that I am primarily self-taught, using nothing more than a dictionary and interactions with native English speakers within the gaming community to enhance my language skills. During my adolescence, I even delved into creating modifications for games, providing me with an invaluable introduction to programming. Without formal courses, I was able to craft new experiences for users by manipulating and modifying the code they interacted with. This experience exposed me to the C++ programming language.Furthermore, I served as an IT instructor for two years, where I gained insight into the social aspects of technology, appreciating the diversity of thoughts and learning methods among individuals. This experience broadened my horizons and deepened my understanding of technology's impact on society.Currently, I am honing my web development skills at Kenzie Academy, an institution known for its hands-on and practical approach to learning. Our curriculum emphasizes weekly project submissions, allowing us to not only grasp theoretical knowledge but also gain real-world experience. Within Kenzie, I have excelled in HTML, CSS, JavaScript, and React, with a focus on Express, TypeORM and PostgreSQL for APIs, and industry best practices. I am also well-versed in Git flow, enabling me to collaborate effectively on team projects.I consider myself a logical thinker with a knack for problem-solving. I thrive on challenges and am always eager to learn and adapt to new technologies.":
                    "Meu nome é Samuel e sou um desenvolvedor web altamente motivado e autodidata, com uma profunda paixão pela tecnologia e um histórico comprovado na criação de experiências excepcionais para os usuários.Atuei como instrutor de TI por dois anos, onde adquiri insights sobre os aspectos sociais da tecnologia, apreciando a diversidade de pensamentos e métodos de aprendizado entre os indivíduos. Essa experiência ampliou meus horizontes e aprofundou minha compreensão do impacto da tecnologia na sociedade.Atualmente, estou aprimorando minhas habilidades em desenvolvimento web na Academia Kenzie, uma instituição conhecida por sua abordagem prática e prática de aprendizado. Nosso currículo enfatiza a entrega semanal de projetos, o que nos permite não apenas compreender o conhecimento teórico, mas também adquirir experiência do mundo real. Na Kenzie, me destaquei em HTML, CSS, JavaScript e React, com foco em Express, TypeORM e PostgreSQL para APIs e back-end assim como as melhores práticas da indústria. Também estou bem familiarizado com o fluxo de trabalho usando Github, o que me permite colaborar eficazmente em projetos de equipe.Me considero um pensador lógico com um talento para resolver problemas. Prospero em desafios e estou sempre ansioso para aprender e me adaptar a novas tecnologias."}
                </p>
            </StyledDiv>
        </StyledSection>
    );
};