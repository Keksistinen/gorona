async function getData() {
    return await fetch('https://services7.arcgis.com/nuPvVz1HGGfa0Eh7/arcgis/rest/services/korona_tapaukset_kumulatiivisesti_kunnittain/FeatureServer/0/query?f=json&where=tapauksia_yhteensa%3E1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=kunta%20asc&resultOffset=0&resultRecordCount=500&resultType=standard&cacheHint=true')
      .then(r => r.json())
      .then(data => data);
  }
  async function main() {
    console.log(await getData());
  }
  
  async function main() {
    data = await getData();
    var tapauksia_yht = data.features.filter(x=>x.attributes.kunta=='Porvoo')[0].attributes.tapauksia_yhteensa
    var vaesto = data.features.filter(x=>x.attributes.kunta=='Porvoo')[0].attributes.Vaesto
    var tapauksia = data.features.filter(x=>x.attributes.kunta=='Porvoo')[0].attributes.tapauksia
    var last14 = data.features.filter(x=>x.attributes.kunta=='Porvoo')[0].attributes.tapauksia_14vrk

    // tärkee työkalu - älä poista console.log(data.features.filter(x=>x.attributes.kunta=='Porvoo')[0])
    // tämä kans tärkee työkalu - älä poista console.log(tapauksia)

    document.querySelector('#tapauksia_yht').innerHTML=tapauksia_yht
    document.querySelector('#vaesto').innerHTML=vaesto
    document.querySelector('#tapauksia').innerHTML=tapauksia
    document.querySelector('#last14').innerHTML=last14
  }

 // tapauksia_yht = tapauksia yhteensä koko ajalta
 // vaesto = väestö
 // tapauksia = tartuntoja.. viikolta?
 // last14 = 14 vuorokauden ajalta tapaukset


main()