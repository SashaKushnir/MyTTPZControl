export const capacitiesA = {
    createCapacities: (num: number) => ({type: "CREATE_CAPACITIES", num}) as const,
    changeCap: (id: number, cap: number) => ({type: "CHANGE_CAPACITY", id, cap}) as const,
}