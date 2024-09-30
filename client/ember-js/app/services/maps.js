import Service from '@ember/service';

export default class MapsService extends Service {
  getValue(map, key, defaultValue = null) {
    let value = map;
    const keyParts = key.split(/[.]/);
    if (!map) {
      return defaultValue;
    }
    for (let keyPart of keyParts) {
      if (value && keyPart in value) {
        value = value[keyPart];
        continue;
      }
      return defaultValue;
    }
    return value;
  }
}
