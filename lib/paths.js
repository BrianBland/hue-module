function nupnpPath() {
    return "/api/nupnp";
}

function getApiPath() {
    var url = "/api";
    return url;
}

function getApiLightsPath(lightID) {
    var url = getApiPath() + "/lights";
    if (lightID)
        url += "/" + lightID;
    return url;
}

function getApiGroupPath(groupID) {
    var url = getApiPath() + "/groups";
    if (groupID)
        url += "/" + groupID;
    return url;
}

function getApiGroupPathState(groupID) {
    return getApiGroupPath(groupID) + "/action";
}
function getApiLightStatePath(lightId) {
    return getApiLightsPath(lightId) + "/state";
}

module.exports = {
    nupnp: nupnpPath,
    api: getApiPath,
    lights: getApiLightsPath,
    lightState: getApiLightStatePath,
    groups: getApiGroupPath,
    groupState: getApiGroupPathState
};
