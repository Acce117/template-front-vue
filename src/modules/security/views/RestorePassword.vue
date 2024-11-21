<script setup lang="ts">
import { Form } from 'vee-validate';
import Button from 'primevue/button';
import InputOtp from 'primevue/inputotp';
import Step from 'primevue/step';
import StepList from 'primevue/steplist';
import StepPanel from 'primevue/steppanel';
import StepPanels from 'primevue/steppanels';
import Stepper from 'primevue/stepper';
import VInput from '@/common/components/VInput.vue';

defineExpose({
    header: 'auth.restore_password.header'
})
</script>

<!-- TODO internationalization -->
<template>
    <div class="card flex justify-center">
        <Stepper value="1" linear class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <Form>
                        <div class="step_container">
                            <p>Ingrese el correo para enviarle el código de recuperación</p>
                            <VInput label="email" name="email" type="email"></VInput>
                        </div>
                        <div class="button_step_nav">
                            <Button label="Cancel" severity="secondary" />
                            <Button label="Next" @click="activateCallback('2')" />
                        </div>
                    </Form>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <Form>
                        <div class="step_container">
                            <p>Verifique su correo e ingrese el código recibido</p>
                            <div style="margin: auto;">
                                <InputOtp :length="6" integer-only></InputOtp>
                            </div>
                        </div>
                        <div class="button_step_nav">
                            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                            <Button label="Next" @click="activateCallback('3')" />
                        </div>
                    </Form>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <Form>
                        <div class="step_container">
                            <p>Ingrese una nueva contraseña</p>
                            <VInput label="Password" name="password" class="auth_input"></VInput>
                            <VInput label="Confirm password" name="confirm_password" class="auth_input"></VInput>
                        </div>
                        <div class="button_step_nav">
                            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                            <Button label="Accept" />
                        </div>
                    </Form>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>