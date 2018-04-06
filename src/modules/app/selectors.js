const getModuleState = state => state.appModule;

export const getIsLoading = state => getModuleState(state).isLoading;
