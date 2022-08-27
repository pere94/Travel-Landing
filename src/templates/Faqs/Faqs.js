import { CartFaqs } from "/src/components/cartFaqs/cartFaqs";

function Faqs() {
  return (
    <section id="faqs" className="p-5 w-full">
      <h2 className="ml-5 mb-5 text-h2Size text-version1 font-bold">FAQs</h2>

      <div className="flex justify-center items-center w-full ">
        <div className="p-5 gap-5 flex flex-wrap justify-center items-center w-[95%] lg:w-full">
          <CartFaqs
            titleFaq='Lorem ipsum dolor sit amet"?'
            descriptionFaq="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam iaculis ligula mi, et elementum nisl interdum id. Phasellus non 
                lacinia ipsum. Morbi varius tortor nibh, quis sagittis lectus euismod 
                vitae."
          />

          <CartFaqs
            titleFaq='Lorem ipsum dolor sit amet"?'
            descriptionFaq="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam iaculis ligula mi, et elementum nisl interdum id. Phasellus non 
                lacinia ipsum. Morbi varius tortor nibh, quis sagittis lectus euismod 
                vitae."
          />

          <CartFaqs
            titleFaq='Lorem ipsum dolor sit amet"?'
            descriptionFaq="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam iaculis ligula mi, et elementum nisl interdum id. Phasellus non 
                lacinia ipsum. Morbi varius tortor nibh, quis sagittis lectus euismod 
                vitae."
          />

          <CartFaqs
            titleFaq='Lorem ipsum dolor sit amet"?'
            descriptionFaq="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam iaculis ligula mi, et elementum nisl interdum id. Phasellus non 
                lacinia ipsum. Morbi varius tortor nibh, quis sagittis lectus euismod 
                vitae."
          />

          <CartFaqs
            titleFaq='Lorem ipsum dolor sit amet"?'
            descriptionFaq="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam iaculis ligula mi, et elementum nisl interdum id. Phasellus non 
                lacinia ipsum. Morbi varius tortor nibh, quis sagittis lectus euismod 
                vitae."
          />

          <CartFaqs
            titleFaq='Lorem ipsum dolor sit amet"?'
            descriptionFaq="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam iaculis ligula mi, et elementum nisl interdum id. Phasellus non 
                lacinia ipsum. Morbi varius tortor nibh, quis sagittis lectus euismod 
                vitae."
          />
        </div>
      </div>
    </section>
  );
}

export { Faqs };
