---
sidebar_position: 37
---

# 37. [flutter] 싱글톤 패턴
---

## 사용해야 하는 이유
---

객체 선언이 중복되면 메모리를 비효율적으로 사용하는 것이기 때문에 자주 선언되는 같은 객체는 한번 선언된다면 다시 선언되지 않아야 해서 싱글톤 패턴을 사용한다.


## 단일 싱글톤
---

### 예제 코드

```dart
class ResourceManager {
  var resourceId;
  static ResourceManager? _instance;

  ResourceManager._privateConstructor(this.resourceId);

  static ResourceManager getInstance(String resourceId) {
    _instance ??= ResourceManager._privateConstructor(resourceId);

    return _instance!;
  }

  void useResource() {
    print("Using resource: $resourceId");
  }
}
```

`??=`을 사용하여 객체 instance가 생성되지 않은 null 값일 때만 객체를 생성해서 싱글톤을 유지할 수 있습니다.

### 사용 예제 
---

```dart
void main() {
  var resource1 = ResourceManager.getInstance("Resource1");
  resource1.useResource(); // Output: Using resource: Resource1

  var resource2 = ResourceManager.getInstance("Resource2");
  resource1.useResource(); // Output: Using resource: Resource2
  resource2.useResource(); // Output: Using resource: Resource2
}
```

## 다중 싱글톤
---

### 예제 코드

```dart
class ResourceManager {
  final String resourceId;
  static final Map<String, ResourceManager> _instances = {};

  ResourceManager._privateConstructor(this.resourceId);

  static ResourceManager getInstance(String resourceId) {
    if (!_instances.containsKey(resourceId)) {
      _instances[resourceId] = ResourceManager._privateConstructor(resourceId);
    }
    return _instances[resourceId]!;
  }

  void useResource() {
    print("Using resource: $resourceId");
  }
}
```

### 사용 예제 

```dart
void main() {
  var resourceA = ResourceManager.getInstance("ResourceA");
  var resourceB = ResourceManager.getInstance("ResourceB");
  
  // This will retrieve the same instance as resourceA
  var anotherResourceA = ResourceManager.getInstance("ResourceA");

  resourceA.useResource(); // Output: Using resource: ResourceA
  resourceB.useResource(); // Output: Using resource: ResourceB
}
```