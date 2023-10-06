export function deepEqual(obj1, obj2) {
  // Si les deux objets sont identiques, retournez vrai
  if (obj1 === obj2) return true

  // Si l'un des objets est nul ou indéfini, ou si leurs types ne correspondent pas, retournez faux
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  )
    return false

  // Récupère les clés des deux objets
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)

  // Si le nombre de clés est différent, retournez faux
  if (keys1.length !== keys2.length) return false

  // Pour chaque clé dans obj1
  for (let key of keys1) {
    // Si la clé n'existe pas dans obj2, ou si les valeurs de la clé dans obj1 et obj2 ne sont pas identiques (récursion ici)
    // alors retournez faux
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false
  }

  // Si tout passe, retournez vrai
  return true
}
