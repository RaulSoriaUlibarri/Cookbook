import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { fetchCountriesList } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

const CountriesContainer = () => {
  type Country = {
    strArea: string;
    strCountry: string;
  };

  const { data, error, isLoading } = useQuery<Country[]>({
    queryFn: fetchCountriesList,
    queryKey: ["countriesList"],
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 15,
  });

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const country = data[i].strCountry;
      countriesArray.push(country);
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section>
      <MaxWidthWrapper></MaxWidthWrapper>
    </section>
  );
};

export default CountriesContainer;
