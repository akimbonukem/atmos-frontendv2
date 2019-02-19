const rootReducer = (
  state = {
    ultimaPlaca: 1,
    placas: {
      byId: {
        "0": {
          id: 0,
          ambiente: "placa 1",
          descricao: "placa 1"
        },
        "1": {
          id: 1,
          ambiente: "placa 2",
          descricao: "placa 2"
        }
      },
      allIds: [0, 1]
    }
  },
  action
) => {
  switch (action.type) {
    case "NOVA_PLACA":
      state = {
        ...state,
        ultimaPlaca: state.ultimaPlaca + 1,
        placas: {
          ...state.placas,
          byId: {
            ...state.placas.byId,
            [action.payload.id]: action.payload
          },
          allIds: [...state.placas.allIds, action.payload.id]
        }
      };
      break;
    case "DELETE_PLACA":
      state = {
        ...state,
        ultimaPlaca: state.ultimaPlaca - 1,
        placas: {
          ...state.placas,
          byId: Object.values(...state.placas.byId).splice(
            ...state.placas.byId[action.payload.id],
            1
          )
        }
      };
    default:
      return state;
  }

  return state;
};

export default rootReducer;
