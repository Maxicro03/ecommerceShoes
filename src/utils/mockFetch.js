const products = [
    {id: 1, marca: "Adidas", modelo: "Pharrell Williams Hu Holi NMD",  imgPrincipal: "./src/componnents/images/Pharrell_Williams_Hu_Holi_NMD.jpg", precio: "8723", stock: { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 2, marca: "Adidas", modelo: "Forum Low",  imgPrincipal: "./src/componnents/images/Forum_Low.jpg", precio: "92",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 3, marca: "Adidas", modelo: "Superstar",  imgPrincipal: "./src/componnents/images/Superstar.jpg", precio: "132",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 4, marca: "Adidas", modelo: "Rivalry Hi Chewbacca de adidas x Star Wars",  imgPrincipal: "./src/componnents/images/Rivalry_Hi_Chewbacca_de_adidas_x_Star_Wars.jpg", precio: "105",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 5, marca: "Adidas", modelo: "adiFOM Q",  imgPrincipal: "./src/componnents/images/adiFOM_Q.jpg", precio: "166",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 6, marca: "Adidas", modelo: "NMD_CS1 Primeknit Adidas x The Good Will Out",  imgPrincipal: "./src/componnents/images/NMD_CS1_Primeknit_Adidas_x_The_Good_Will_Out.jpg", precio: "1104",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 7, marca: "Nike", modelo: "Air Jordan 1 Retro High OG 2017", imgPrincipal: "./src/componnents/images/Air_Jordan_1_Retro_High_OG_2017.jpg", precio: "610",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 8, marca: "Nike", modelo: "Air Jordan 1 Mid", imgPrincipal: "./src/componnents/images/Air_Jordan_1_Mid.jpg", precio: "143", stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 9, marca: "Nike", modelo: "Air Jordan 1 Low Travis Scott",  imgPrincipal: "./src/componnents/images/Air_Jordan_1_Low_Travis Scott.jpg", precio: "4089",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 10, marca: "Nike", modelo: "Air Jordan 1 Retro Fearless",  imgPrincipal: "./src/componnents/images/Air_Jordan_1_Retro_Fearless.jpg", precio: "560",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 11, marca: "Nike", modelo: "Air Jordan 1 Zoom CMFT 2 A Rose From Harlem de Nike x Teyana Taylor",  imgPrincipal: "./src/componnents/images/Air_Jordan_1_Zoom_CMFT_2_A_Rose_From_Harlem_de_Nike_x_Teyana_Taylor.jpg", precio: "353",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 12, marca: "Nike", modelo: `Air Jordan 1 Low OG TS "Travis Scott - Black Phantom"`,  imgPrincipal: "./src/componnents/images/Air_Jordan_1_Low_OG_TS_Travis_ScottBlack_Phantom.jpg", precio: "1041",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 13, marca: "Puma", modelo: "Slipstream con cordones de PUMA x RIPNDIP",  imgPrincipal: "./src/componnents/images/Slipstream_con_cordones_de_PUMA_x_RIPNDIP.jpg", precio: "164",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 14, marca: "Puma", modelo: "ClydeZilla MIJ Clyde Low",  imgPrincipal: "./src/componnents/images/ClydeZilla_MIJ_Clyde_Low.jpg", precio: "309",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 15, marca: "Puma", modelo: "X-RAY Speed Mid",  imgPrincipal: "./src/componnents/images/X_RAY_Speed_Mid.jpg", precio: "201",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 16, marca: "Puma", modelo: "Slipstream Lo Post Game Runway de PUMA x Dapper Dan",  imgPrincipal: "./src/componnents/images/Slipstream_Lo_Post_Game_Runway_de_PUMA_x_Dapper_Dan.jpg", precio: "286",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 17, marca: "Puma", modelo: "Altas MB.02",  imgPrincipal: "./src/componnents/images/Altas_MB_02.jpg", precio: "252",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 18, marca: "Puma", modelo: "Variant Nitro Sci-Tech",  imgPrincipal: "./src/componnents/images/Variant_Nitro_Sci_Tech.jpg", precio: "252",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 19, marca: "New Balance", modelo: "Altas 650 Crema",  imgPrincipal: "./src/componnents/images/Altas_650.jpg", precio: "145",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 20, marca: "New Balance", modelo: "Altas 650 Honeycomb",  imgPrincipal: "./src/componnents/images/Altas_650_Honeycomb.jpg", precio: "151",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 21, marca: "New Balance", modelo: "Altas 650 Blanco",  imgPrincipal: "./src/componnents/images/Altas_650_2.jpg", precio: "194",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 22, marca: "New Balance", modelo: "Bajas 550",  imgPrincipal: "./src/componnents/images/Bajas_550.jpg", precio: "189",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 23, marca: "New Balance", modelo: `550 "Brown/Beige de New Balance x Aimé Leon Dore"`,  imgPrincipal: "./src/componnents/images/550 _Brown_Beige_de_New_Balance_x_Aimé_Leon_Dore.jpg", precio: "253",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}},
    {id: 24, marca: "New Balance", modelo: "Altas 650 Rojo",  imgPrincipal: "./src/componnents/images/Altas_650_3.jpg", precio: "152",  stock:  { talle_7: 20, talle_7_5: 20, talle_8: 20, talle_8_5: 20, talle_9: 20, talle_9_5: 20, talle_10: 20, talle_10_5: 20, talle_11: 20, talle_11_5: 20, talle_12: 20, talle_12_5: 20, talle_13: 20}}
]

export const mFetch = () => new Promise((res,rej) => {
    const condition = true
    if(condition){
        setTimeout(()=>{
            res(products)
        }, 1000)
    }
    else{
        rej("Sin Productos")
    }
})
