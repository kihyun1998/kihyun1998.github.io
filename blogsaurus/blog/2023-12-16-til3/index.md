---
slug: Bloc
title: Flutter Bloc 1
authors: [kihyun]
tags: [TIL, 플러터, flutter, Bloc ]
---

# Flutter Bloc 1
---

일단 vs code 확장은 `bloc`, `dart data class generator`, `dart-import`, `pubspec assist`

`dart data class generator`가 있으면 코드 자동 생성을 편하게 해준다. (copyWith, constructor 등.. )

`pubspec assist`가 있으면 패키지를 쉽게 넣을 수 있음


## Bloc에 대해서
---

영상을 보며 따라하면서 저번주에 KOSTA에서 배운 Bloc 사용법에 대해 익히고 있었다.

영상은 다른 방식이라 헷갈렸는데 VS Code의 Bloc extension을 사용하여 New Bloc을 해가지구 Bloc을 만들었다.

3개의 파일이 나온다. `bloc`,`event`,`state`

### state

```dart
class TasksState extends Equatable {
  const TasksState({
    this.allTasks = const <Task>[],
  });

  final List<Task> allTasks;

  @override
  List<Object> get props => [allTasks];
}
```

현재 state에는 `List<Task>` 타입의 allTasks라는 상태가 하나 있다.

여러 개 추가하면 여러 개 되는듯?

### event

```dart
sealed class TasksEvent extends Equatable {
  const TasksEvent();

  @override
  List<Object> get props => [];
}

class AddTask extends TasksEvent {
  final Task task;
  const AddTask({
    required this.task,
  });

  @override
  List<Object> get props => [task];
}

class UpdateTask extends TasksEvent {
  final Task task;
  const UpdateTask({
    required this.task,
  });

  @override
  List<Object> get props => [task];
}

class DeleteTask extends TasksEvent {
  final Task task;
  const DeleteTask({
    required this.task,
  });

  @override
  List<Object> get props => [task];
}

```

이렇게 서비스들 만들 수 있다. 현재 전부 구현된건 아닌.. 거같은데 일단 이따 수정


### bloc

하다가 깨달았다.

```dart
class TasksBloc extends Bloc<TasksEvent, TasksState> {
  TasksBloc() : super(const TasksState()) {
    on<AddTask>(_onAddTask);
  }

  void _onAddTask(AddTask event, emit) {
    emit(TasksState(
      allTasks: [...state.allTasks, event.task],
    ));
  }
}
```

Bloc을 extends 할 때 `Bloc<event, state>`로 하라고 배웠다. 근데 할 때 state를 `int`나 `bool`같은 타입으로만 지정해줘서 그냥 state로 사용하면 됐었는데 class로 state 타입 지정해주니 state.allTasks로 해야 하더라.. 

### 깨달음

bloc에서 큰 실수가 있었다. 위코드 처럼 작성하면 되는데 코드 수를 줄여보겠다고

```dart
  void _onAddTask(AddTask event, emit) {
    emit(
      [...state.allTasks, event.task],
    );
  }
```

위처럼 작성했다가 작동을 안해서 살짝 어지러웠다.

Bloc이 `Bloc<TasksEvent,TasksState>`이니 TasksState type에 맞춰줘야 하나보다.