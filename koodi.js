async function getData() {
    return await fetch('https://sampo.thl.fi/pivot/prod/fi/epirapo/covid19case/fact_epirapo_covid19case.json?row=hcdmunicipality2020-445196.&column=dateweek20200101-509030&filter=measure-444833', {mode: "no-cors"})
      .then(r => r.json())
      .then(data => data);
  }
  async function main() {
    console.log(await getData());
  }
  
  async function main() {
    data = await getData();
    console.log(data.infected)
  }
  
main()