import { AiFillQuestionCircle } from "react-icons/ai";

function CartFaqs({ titleFaq, descriptionFaq }) {
    return (
        <div className="w-[30%] min-w-[320px] max-w-[600px] shadow-simpleSh h-60 rounded-3xl p-5 md:w-full">
            <span className="flex justify-center items-center">
              <AiFillQuestionCircle className="w-8 h-8 mr-3 text-version2" />
              <h3 className="text-h3Size font-bold mb-2 dark:text-white">
                {titleFaq}
              </h3>
            </span>
            <p className="dark:text-white">
              {descriptionFaq}
            </p>
          </div>
    );
}

export {CartFaqs};