export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/d7284bbd-1d35-4022-9158-720e8d52c1e9/files/a1caf36c-cbc4-443c-892c-c60eef81e617.jpg"
          alt="Консультация преподавателя со студентом"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">О дисциплине</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Психология — это наука о человеке во всей его сложности. Мы изучаем восприятие, мышление, эмоции и поведение, чтобы понять, как устроен внутренний мир личности.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Записаться на курс
        </button>
      </div>
    </div>
  );
}