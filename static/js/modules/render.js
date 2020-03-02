// render data
export function renderData(data) {
    const parent = document.getElementById('results');
    parent.innerHTML = "";
    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
      const html = `
              <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">
            `;
      parent.insertAdjacentHTML('beforeend', html);
    });
  }