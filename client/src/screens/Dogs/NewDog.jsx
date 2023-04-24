import styled from "styled-components";
import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import GetBack from "../../components/getBack";
import NewDogForm from "./components/NewDog/NewDogForms";
import BasicButton from "../../components/BasicButton";
import { useForm } from "react-hook-form";
import useDogs from "../../hooks/useDogs";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  .content {
    margin-top: 48px;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const NewDog = () => {
  const { dogs, setDogs } = useDogs();
  const {
    reset,
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      breed: "",
      sex: "",
      age: "",
      location: "",
      color: "",
      size: "",
      petId: "",
      story: "",
    },
  });

  const handleClickAdd = () => {
    const getLastId = dogs.at(-1).id;
    setDogs((prev) => {
      return [...prev, { id: getLastId + 1, ...getValues() }];
    });
  };

  return (
    <Layout>
      <Wrapper>
        <PawsBcg>
          <Container>
            <div className="content">
              <div className="head">
                <div className="intro">
                  <GetBack naviageTo="/dogs" backPage="Dogs" />
                  <h2>New Dog</h2>
                </div>

                <div className="buttons">
                  <BasicButton onClick={() => reset()} title="Remove" />
                  <BasicButton
                    onClick={handleSubmit(handleClickAdd)}
                    title="Add"
                  />
                </div>
              </div>

              <div>
                <NewDogForm register={register} errors={errors} />
              </div>
            </div>
          </Container>
        </PawsBcg>
      </Wrapper>
    </Layout>
  );
};

export default NewDog;
