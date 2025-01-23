function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-center transition-all hover:text-purple">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 bg-purple-500 mx-auto"></div>
    </div>
  );
}

export default SectionHeading;
