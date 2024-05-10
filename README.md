# Buttons 

There are 2 types of buttons: `PrimaryButton`, `SecondaryButton`


### Usage
Simple button

```<PrimaryButton>Button</PrimaryButton>```

Loading state

```
<PrimaryButton isLoading>
  Button
</PrimaryButton>
```

Size

```
<PrimaryButton size={ButtonSizes.Middle}>
  Button
</PrimaryButton>
```


Icons (use component ButtonIconsBody):
```
<PrimaryButton>
  <ButtonIconsBody rightIcon={IconSet.side.ArrowCircleRightIcon('fill-black rotate-90')}>
    Confirm action
  </ButtonIconsBody>
</PrimaryButton>
```