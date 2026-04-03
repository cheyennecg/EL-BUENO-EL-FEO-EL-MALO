 <script>
        const data = {
            pallet: { name: "PUEBLO PALETA", leader: "Prof. Oak", type: "INICIO", color: "#ccc", poke: "🐾", as: "Starter", desc: "Aquí comienza tu aventura. ¡Elige bien a tu compañero!" },
            gym1: { name: "CIUDAD PLATEADA", leader: "Brock", type: "ROCA", color: "var(--rock)", poke: "🐍", as: "Onix", desc: "Ideal para tipos  🌿 o  💧. ¡Tú punto fuerte debe ser el ataque!" },
            gym2: { name: "CIUDAD CELESTE", leader: "Misty", type: "AGUA", color: "var(--water-type)", poke: "💧", as: "Starmie", desc: "Los tipos ⚡ y  🌿 son tus mejores amigos aquí. Starmie es muy rápido y pega fuerte. Necesitas mucha vida para aguantar el temporal." },
            gym3: { name: "CIUDAD CARMÍN", leader : "Lt.Surge", type: "ELÉCTRICO", color: "var(--electric)", poke: "⚡", as: "Raichu", desc: "Los tipos  🏜️ son inmunes a sus ataques eléctricos. ¡En este caso la defensa  es un buen ataque!" },
            gym4: { name: "CIUDAD AZULONA", leader: "Erika", type: "PLANTA", color: "var(--grass-type)", poke: "🌸", as: "Vileplume", desc: "Líder de planta. Débil contra: Fuego, Volador e Hielo." },
            gym5: { name: "CIUDAD FUCSIA", leader: "Koga", type: "VENENO", color: "var(--poison)", poke: "☁️", as: "Weezing", desc: "Líder de veneno. Débil contra: Psíquico y Tierra. Usa ataques indirectos." },
            gym6: { name: "CIUDAD AZAFRÁN", leader: "Sabrina", type: "PSÍQUICO", color: "var(--psychic)", poke: "🥄", as: "Alakazam", desc: "Líder psíquico. Débil contra: Bicho (técnicamente). ¡Es el gimnasio más difícil!" },
            gym7: { name: "ISLA CANELA", leader: "Blaine", type: "FUEGO", color: "var(--fire)", poke: "🔥", as: "Arcanine", desc: "Líder de fuego. Débil contra: Agua, Tierra y Roca." },
            gym8: { name: "CIUDAD VERDE", leader: "Giovanni", type: "TIERRA", color: "var(--ground)", poke: "🦏", as: "Rhydon", desc: "Líder de tierra. Débil contra: Agua y Planta (x4). ¡Cuidado con Fisura!" },
            lavender: { name: "PUEBLO LAVANDA", leader: "---", type: "FANTASMA", color: "#705898", poke: "👻", as: "Gastly", desc: "Ciudad tranquila. Aquí se encuentra la Torre Pokémon y el Sr. Fuji." }
        };

        function updateBattle(key) {
            const info = data[key];
            const display = document.getElementById('poke-display');
            
            // Actualizar Sprite y Nombre del Pokémon As
            display.querySelector('.sprite-box').innerHTML = info.poke;
            display.querySelector('h3').innerText = "AS: " + info.as;

            // Actualizar Texto de Combate
            let html = `
                <h2>${info.name}</h2>
                <span class="type-tag" style="background:${info.color}">${info.type}</span>
                <p><strong>Líder:</strong> ${info.leader}</p>
                <p><strong>Estrategia:</strong> ${info.desc}</p>
            `;
            document.getElementById('battle-text').innerHTML = html;
        }
    </script>