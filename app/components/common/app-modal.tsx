import { View, Modal, StyleSheet } from "react-native";
import CommonStyles from "../../styles/common.styles";
import AppButton from "./app-button";

const AppModal = ({
  visible,
  children,
  close,
}: {
  visible: boolean;
  children: JSX.Element;
  close: () => void;
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={close}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {children}
            <View style={styles.closeButton}>
              <AppButton title="Close" onPress={close} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.2)" },
  modalView: {
    top: 30,
    height: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    ...CommonStyles.shadow,
  },
  closeButton: {
    marginTop: 14,
  },
});

export default AppModal;
