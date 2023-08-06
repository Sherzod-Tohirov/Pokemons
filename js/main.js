let elList = document.querySelector('.js-list');
let elFilterInp = document.querySelector('.js-filter-input');

elFilterInp.addEventListener('keyup', (evt) => {
  let inpVal = elFilterInp.value.trim().toLowerCase();
  
  let result = pokemons.filter(item => {
       return item.name.toLowerCase().startsWith(inpVal); 
  });

  renderPokemons(result);

});

renderPokemons(pokemons);







function renderPokemons(arr) {
	elList.innerHTML = '';
	arr.forEach(item => {

	elList.innerHTML +=	`<li class="list__item">
						<img class="list__img" src="${item.img}" width="150" height="150" alt="${item.name} pokemon">
						<div class="list__data">
							<div class="list__l-data">
								<p class="list__data-title">
								    Name:
									<span class="list__data-desc">${item.name}</span>
								</p>
								<p class="list__data-title">
								    Type: 
									<span class="list__data-desc">${item.type[0] ? item.type[0] : "ma'lum emas" }</span>
								</p>
								<p class="list__data-title">
									Candy: 
									<span class="list__data-desc">${item.candy}</span>
								</p>
								<p class="list__data-title">
									Candy count: 
									<span class="list__data-desc">${item.candy_count}</span>
								</p>
							</div>
							<div class="list__r-data">
								<p class="list__data-title">
								   Height: 
									<span class="list__data-desc">${item.height}</span>
								</p>
								<p class="list__data-title">
								   Weight: 
									<span class="list__data-desc">${item.weight}</span>
								</p>
								<p class="list__data-title">
									Egg: 
									<span class="list__data-desc">${item.egg}</span>
								</p>
								<p class="list__data-title">
									Spawn time: 
									<span class="list__data-desc">${item.spawn_time}</span>
								</p>
							</div>
						</div>
					</li>`

	});

}

// pokemons.forEach(item => {
// let elItem = document.createElement('li');
// elItem.classList.add('list__item');
// let img = document.createElement('img');
// img.classList.add('list__img');
// img.width = '150';
// img.height = '150';
// let divData = document.createElement('div');
// divData.classList.add('list__data');
// let divL = document.createElement('div');
// divL.classList.add('list__l-data');
// let divR = document.createElement('div');
// divR.classList.add('list__r-data');
// let p = document.createElement('p');
// let p2 = document.createElement('p');
// p.classList.add('list__data-title');
// p2.classList.add('list__data-title');
// let span = document.createElement('span');
// let span2 = document.createElement('span');
// span.classList.add('list__data-desc'); 
// span2.classList.add('list__data-desc'); ;
// p.innerHTML = "Name: ";
// p2.innerHTML = "Candy: ";
// span.innerHTML += item.name;
// span2.innerHTML += item.candy;

// p.appendChild(span);
// p2.appendChild(span2);
// divL.appendChild(p);
// divR.appendChild(p2);
// divData.appendChild(divL);
// divData.appendChild(divR);
// img.src = item.img;
// elItem.appendChild(img);
// elItem.appendChild(divData);
// elList.appendChild(elItem);
// }); 