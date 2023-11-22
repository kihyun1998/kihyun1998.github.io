---
sidebar_position: 4
---

# [gRPC] 4. gRPC - Serialize protobuf message

## 학습 목표
---

1. protobuf message를 바이너리로 작성
2. 위를 읽기
3. protobuf message를 JSON으로 작성
4. binary vs JSON

### JSON으로 변환하는 함수

```go
func ProtobufToJson(message proto.Message) ([]byte, error) {
	marshaler := protojson.MarshalOptions{
		UseEnumNumbers: false,
		Indent:         "  ",
		UseProtoNames:  true,
	}
	return marshaler.Marshal(message)
}


func WriteProtobufToJSONFile(message proto.Message, filename string) error {
	data, err := ProtobufToJson(message)
	if err != nil {
		return fmt.Errorf("cannot marshal proto message to json : %w", err)
	}

	err = os.WriteFile(filename, data, 0644)
	if err != nil {
		return fmt.Errorf("cannot write JSON data to file : %w", err)
	}
	return nil
}
```


### 바이너리로 변환 함수

```go
// WriteProtobufToBinaryFile protobuf 메시지를 바이너리로 작성
func WriteProtobufToBinaryFile(message proto.Message, filename string) error {
	data, err := proto.Marshal(message)
	if err != nil {
		return fmt.Errorf("cannot marshal proto message to binary : %w", err)
	}

	err = os.WriteFile(filename, data, 0644)
	if err != nil {
		return fmt.Errorf("cannot write binary data to file: %w", err)
	}

	return nil
}
```


### 바이너리 읽기 함수

```go
// ReadProtobufFromBinaryFile binary 파일 읽기
func ReadProtobufFromBinaryFile(message proto.Message, filename string) error {
	data, err := os.ReadFile(filename)
	if err != nil {
		return fmt.Errorf("cannot read binary data from file : %w", err)
	}
	err = proto.Unmarshal(data, message)
	if err != nil {
		return fmt.Errorf("cannot unmarshal binary to proto message :%w", err)
	}

	return nil
}
```