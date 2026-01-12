import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
import { countries } from "../assets/countryData";

export const CountryFallback = ({ target }) => {
    const { setCountry, locale } = useGlobalContext();
    const navigate = useNavigate();

    const handleSelect = (code) => {
        setCountry(code);
        localStorage.setItem("country", code);
        navigate(`/${target}/${code}`);
    };

    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-3xl w-full text-center space-y-8" data-aos="fade-up">
                <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 dark:text-orange-400">
                    {locale.p_fallback || "Please Select Your Country"}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    To show you the right content and packages, please let us know where you are from.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {countries.map((c) => (
                        <button
                            key={c.code}
                            onClick={() => handleSelect(c.code)}
                            className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:border-orange-400 dark:hover:border-orange-500 transition-all group"
                        >
                            <span className="text-4xl group-hover:scale-110 transition-transform">
                                {c.flag || "🌍"}
                            </span>
                            <span className="font-semibold text-gray-800 dark:text-gray-100">
                                {c.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
};
