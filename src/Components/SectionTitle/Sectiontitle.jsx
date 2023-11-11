

const Sectiontitle = ({subHeading, Heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-3">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{Heading}</h3>
        </div>
    );
};

export default Sectiontitle;