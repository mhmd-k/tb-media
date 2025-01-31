function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-center transition-all hover:text-purple-400">
        {title}
      </h2>
      <div className="flex mt-4 w-fit gap-2 mx-auto">
        <div className="h-2 w-16 bg-purple-500 mx-auto rounded-md"></div>
        <div className="h-2 w-2 bg-purple-500 mx-auto rounded-full"></div>
        <div className="h-2 w-2 bg-purple-500 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}

export default SectionHeading;
